const { expect } = require('chai');
const { spawn } = require('child_process');
const { setTimeout } = require('timers/promises');
const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/data.json');

/* eslint-disable */
describe('API Test Suite', () => {
  let postId;
  let childProcess;

  before(async () => {
    childProcess = await spawn('npm.cmd', ['--prefix', './service', 'start'], { detached: false });
    await setTimeout(10000);
  });

  it('should get() all posts', async () => {
    const response = await sendRequest('posts');

    expect(response.status).to.equal(200);
    expect(response.data[0].id).to.equal(1);
  });

  it('should create a post using post() method', async () => {
    const response = await sendRequest('posts/', testData, 'post');

    postId = response.data.id;
    expect(response.status).to.equal(201);

    const post = await sendRequest(`posts/${postId}`);
    expect(post.status).to.equal(200);
    expect(post.data.id).to.equal(postId);
    expect(post.data.author).to.equal('STAS');
  });

  it('should get a resource with ID=14', async () => {
    const post = await sendRequest('posts/14');
    expect(post.status).to.equal(200);
    expect(post.data.id).to.equal(14);
    expect(post.data.author).to.equal('STAS');
    expect(post.data.hobby[0].sport).include('bicycle');
  });

  it('should get() all posts and filter it', async () => {
    const response = await sendRequest('posts');
    const filteredResponse = await response.data.filter(elem => elem.id % 2 === 0);
    console.log(filteredResponse);
  });

  it('should update put() resource with ID=2 )', async () => {
    const resourceID2 = {
      title: 'json-serve112r UPDATED',
      author: 'typicode UPDATED',
    };
    const response = await sendRequest('posts/2', resourceID2, 'put');
    expect(response.status).to.equal(200);
    expect(response.data.id).to.equal(2);
    expect(response.data.author).to.equal('typicode UPDATED');
    expect(response.data.title).to.equal('json-serve112r UPDATED');
  });

  it('should create a post using post() method and than should Delete a latest post using delete() method', async () => {
    const response = await sendRequest('posts/', testData, 'post');

    postId = response.data.id;
    expect(response.status).to.equal(201);

    const post = await sendRequest(`posts/${postId}`);
    expect(post.status).to.equal(200);
    expect(post.data.id).to.equal(postId);
    expect(post.data.author).to.equal('STAS');

    const deletePost = await sendRequest(`posts/${postId}`, null, 'delete');
    expect(deletePost.status).to.equal(200);

    const allPosts = await sendRequest('posts');
    await expect(allPosts.data.find(elem => elem.id === `${postId}`)).is.undefined;
  });

  it('Negative scenarios for catch', async () => {
    const post = await sendRequest('posts/99999');
    expect(post.status).to.equal(404);
  });

  after(function () {
    process.exit(0);
  });
});

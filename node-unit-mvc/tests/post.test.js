const sinon = require('sinon');
const PostModel = require('../models/post.model');
const PostController = require('../controllers/post.controller');

describe('Post controller', () => {

    // default request object
    let req = {
        body: {
            author: 'stswenguser',
            title: 'First test post',
            content: 'Random content'
        }
    };

    // default variables
    let error = new Error({ error: 'Some error message' });
    let res = {};
    let expectedResult;



    // test case: create post
    describe('create', () => {

        // default variables
        var createPostStub;

        // executed before every test case
        beforeEach(() => {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        });
        // executed after every test case
        afterEach(() => {
            createPostStub.restore();
        });

        // intended behavior
        it('should return the created post object', () => {

            // model request
            req = {
                body: {
                    author: 'stswenguser',
                    title: 'First test post',
                    content: 'Random content'
                }
            };
            // arrange
            expectedResult = {
                _id: '200200',
                title: 'First test post',
                content: 'Random content',
                author: 'stswenguser',
                date: Date.now()
            };

            // stub
            createPostStub = sinon.stub(PostModel, 'createPost').yields(null, expectedResult);
            // act
            PostController.create(req, res);
            // assert
            sinon.assert.calledWith(PostModel.createPost, req.body);
            sinon.assert.calledWith(res.json, sinon.match({ title: req.body.title }));
            sinon.assert.calledWith(res.json, sinon.match({ content: req.body.content }));
            sinon.assert.calledWith(res.json, sinon.match({ author: req.body.author }));
        });

        // unintended behavior (error scenario)
        it('should return status 500 on server error', () => {
            // arrange
            createPostStub = sinon.stub(PostModel, 'createPost').yields(error);
            // act
            PostController.create(req, res);
            // assert
            sinon.assert.calledWith(PostModel.createPost, req.body);
            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledOnce(res.status(500).end);
        });
    });

    // test case: update post
    describe('update', () => {

        // default variables
        var updatePostStub;
      
        // executed before every test case
        beforeEach(() => {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        });
        // executed after every test case
        afterEach(() => {
            updatePostStub.restore();
        });

        // intended behavior
        it('should return the updated post object', () => {

            // model request
            req = {
                body: {
                    author: 'stswenguser',
                    title: 'Updated first test post',
                    content: 'Random content'
                }
            };
            // arrange
            expectedResult = {
                _id: '200200',
                title: 'Updated first test post',
                content: 'Random content',
                author: 'stswenguser',
                date: Date.now()
            };

            // stub
            updatePostStub = sinon.stub(PostModel, 'updatePost').yields(null, expectedResult);
            // act
            PostController.update(req, res);
            // assert
            sinon.assert.calledWith(PostModel.updatePost, req.body);
            sinon.assert.calledWith(res.json, sinon.match({ title: req.body.title }));
            sinon.assert.calledWith(res.json, sinon.match({ content: req.body.content }));
            sinon.assert.calledWith(res.json, sinon.match({ author: req.body.author }));
        });

        // unintended behavior (error scenario)
        it('should return status 500 on server error', () => {
            // arrange
            updatePostStub = sinon.stub(PostModel, 'updatePost').yields(error);
            // act
            PostController.update(req, res);
            // assert
            sinon.assert.calledWith(PostModel.updatePost, req.body);
            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledOnce(res.status(500).end);
        });
    });

    // test case: find post
    describe('findPost', () => {
        
        // default variables
        var findPostStub;
      
        // executed before every test case
        beforeEach(() => {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        });
        // executed after every test case
        afterEach(() => {
            findPostStub.restore();
        });

        // intended behavior
        it('should return the found post object', () => {

            // model request
            req = {
                body: {
                    title: 'First test post',
                }
            };
            // arrange
            expectedResult = {
                _id: '200200',
                title: 'First test post',
                content: 'Random content',
                author: 'stswenguser',
                date: Date.now()
            };

            // stub
            findPostStub = sinon.stub(PostModel, 'findPost').yields(null, expectedResult);
            // act
            PostController.findPost(req, res);
            // assert
            sinon.assert.calledWith(PostModel.findPost, req.body);
            sinon.assert.calledWith(res.json, sinon.match({ title: req.body.title }));
        });

        // unintended behavior (error scenario)
        it('should return status 500 on server error', () => {
            // arrange
            findPostStub = sinon.stub(PostModel, 'findPost').yields(error);
            // act
            PostController.findPost(req, res);
            // assert
            sinon.assert.calledWith(PostModel.findPost, req.body);
            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledOnce(res.status(500).end);
        });
    })

    // test case: find post
    describe('findPost', () => {
        
        // default variables
        var findPostStub;
      
        // executed before every test case
        beforeEach(() => {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        });
        // executed after every test case
        afterEach(() => {
            findPostStub.restore();
        });

        // intended behavior
        it('should return the found post object', () => {

            // model request
            req = {
                body: {
                    title: 'First test post',
                }
            };
            // arrange
            expectedResult = {
                _id: '200200',
                title: 'First test post',
                content: 'Random content',
                author: 'stswenguser',
                date: Date.now()
            };

            // stub
            findPostStub = sinon.stub(PostModel, 'findPost').yields(null, expectedResult);
            // act
            PostController.findPost(req, res);
            // assert
            sinon.assert.calledWith(PostModel.findPost, req.body);
            sinon.assert.calledWith(res.json, sinon.match({ title: req.body.title }));
        });

        // unintended behavior (error scenario)
        it('should return status 500 on server error', () => {
            // arrange
            findPostStub = sinon.stub(PostModel, 'findPost').yields(error);
            // act
            PostController.findPost(req, res);
            // assert
            sinon.assert.calledWith(PostModel.findPost, req.body);
            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledOnce(res.status(500).end);
        });
    })
      
    // test case: get all posts
    describe('getAllPosts', () => {
        
        // default variables
        var getAllPostsStub;
      
        // executed before every test case
        beforeEach(() => {
            res = {
                json: sinon.spy(),
                status: sinon.stub().returns({ end: sinon.spy() })
            };
        });
        // executed after every test case
        afterEach(() => {
            getAllPostsStub.restore();
        });

        // intended behavior
        it('should return all post objects', () => {

            // arrange
            expectedResult = [
                {
                    _id: '200200',
                    title: 'First test post',
                    content: 'Random content',
                    author: 'stswenguser',
                    date: Date.now()
                },
                {
                    _id: '200201',
                    title: 'Second test post',
                    content: 'Random content',
                    author: 'stswenguser',
                    date: Date.now()
                },
                {
                    _id: '200202',
                    title: 'Third test post',
                    content: 'Random content',
                    author: 'stswenguser',
                    date: Date.now()
                }
            ];

            // stub
            getAllPostsStub = sinon.stub(PostModel, 'getAllPosts').yields(null, expectedResult);
            // act
            PostController.getAllPosts(req, res);
            // assert
            sinon.assert.calledWith(PostModel.getAllPosts, req.body);
            sinon.assert.calledWith(res.json, sinon.match.array.deepEquals(expectedResult));
        });

        // unintended behavior (error scenario)
        it('should return status 500 on server error', () => {
            // arrange
            getAllPostsStub = sinon.stub(PostModel, 'getAllPosts').yields(error);
            // act
            PostController.getAllPosts(req, res);
            // assert
            sinon.assert.calledWith(PostModel.getAllPosts, req.body);
            sinon.assert.calledWith(res.status, 500);
            sinon.assert.calledOnce(res.status(500).end);
        });
    })
});
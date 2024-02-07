const postController = require ("./postController");
// const { jest } = require ("@jest/globals");

describe('deletePost', () => {
  it('should delete a post correctly', async () => {
    const postId = '1';
    const callback = jest.fn();

    postController.postModel.deletePost = jest.fn().mockResolvedValue();
    await postController.deletePost(postId, callback);
    
    expect(postController.postModel.deletePost).toHaveBeenCalledWith(postId, expect.any(Function));
    expect(callback).toHaveBeenCalled();
  });
});
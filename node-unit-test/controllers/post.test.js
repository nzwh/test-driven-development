const postController = require ("./postController");
// const { jest } = require ("@jest/globals");

describe('getUserPosts', () => {
  it('should retrieve user posts correctly', async () => {
    const userId = 'user';
    const callback = jest.fn(); // Using jest.fn() directly

    const mockPosts = [
      { _id: '1', title: 'Post 1', content: 'Content 1' },
      { _id: '2', title: 'Post 2', content: 'Content 2' }
    ];

    postController.postModel.getByUser = jest.fn().mockResolvedValue(mockPosts);
    postController.getUserPosts(userId, callback);
    expect(postController.postModel.getByUser).toHaveBeenCalledWith(userId, expect.any(Function));
    expect(callback).toHaveBeenCalledWith(mockPosts);
  });
});
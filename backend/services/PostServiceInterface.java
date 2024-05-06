package com.food_app.foodapp.services;

import com.food_app.foodapp.model.Comment;
import com.food_app.foodapp.model.Post;
import java.util.List;
import java.util.Optional;

interface PostServiceInterface {

    public List<Post> getAllPosts();

    public Optional<Post> getPostById(String id);

    public Post createPost(Post post);

    public Post updatePost(String id, Post post);

    public boolean deletePost(String id);

    public Post likePost(String id, String userId);

    public Post addComment(String id, Comment comment);
}
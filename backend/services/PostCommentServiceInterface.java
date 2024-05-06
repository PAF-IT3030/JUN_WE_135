package com.food_app.foodapp.services;

import com.food_app.foodapp.model.PostComment;
import java.util.List;

interface PostCommentServiceInterface {

    public List<PostComment> findAll();

    public PostComment save(PostComment PostComment);

    public PostComment findById(String id);

    public void deleteById(String id);
}

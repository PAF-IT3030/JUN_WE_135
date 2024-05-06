package com.food_app.foodapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.food_app.foodapp.model.PostComment;

public interface PostCommentRepository extends MongoRepository<PostComment, String> {
}
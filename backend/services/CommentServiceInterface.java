package com.food_app.foodapp.services;

import java.util.List;

import com.food_app.foodapp.model.Comment;

interface CommentServiceInterface {

    public Comment createComment(Comment comment);

    public Comment getCommentById(String commentId);

    public Comment updateComment(String commentId, Comment comment);

    public void deleteComment(String commentId);

    public List<Comment> getAllComments();

}

package com.food_app.foodapp.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_app.foodapp.model.PostComment;
import com.food_app.foodapp.repositories.PostCommentRepository;

import java.util.List;

@Service
public class PostCommentService {
    @Autowired
    private PostCommentRepository commentRepository;

    public List<PostComment> findAll() {
        return commentRepository.findAll();
    }

    public PostComment save(PostComment PostComment) {
        return commentRepository.save(PostComment);
    }

    public PostComment findById(String id) {
        return commentRepository.findById(id).orElse(null);
    }

    public void deleteById(String id) {
        commentRepository.deleteById(id);
    }
}

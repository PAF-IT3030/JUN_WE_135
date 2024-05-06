package com.food_app.foodapp.repositories;

import com.food_app.foodapp.model.WorkOutPlan;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkOutPlanRepository extends MongoRepository<WorkOutPlan, String> {
}
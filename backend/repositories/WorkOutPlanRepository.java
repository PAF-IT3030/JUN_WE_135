package com.food_app.foodapp.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.food_app.foodapp.model.workoutplan.WorkOutPlan;

@Repository
public interface WorkOutPlanRepository extends MongoRepository<WorkOutPlan, String> {
}
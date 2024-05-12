package com.food_app.foodapp.services;

import com.food_app.foodapp.model.workoutplan.WorkOutPlan;
import java.util.List;
import java.util.Optional;

interface WorkOutPlanInterface  {

    public List<WorkOutPlan> getAllWorkOutPlans();

    public Optional<WorkOutPlan> getWorkOutPlanById(String id);

    public WorkOutPlan createWorkOutPlan(WorkOutPlan workoutPlan);

    public WorkOutPlan updateWorkOutPlan(String id, WorkOutPlan workoutPlan);

    public boolean deleteWorkOutPlan(String id);
    
}

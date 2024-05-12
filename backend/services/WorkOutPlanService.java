package com.food_app.foodapp.services;

import com.food_app.foodapp.model.workoutplan.WorkOutPlan;
import com.food_app.foodapp.repositories.WorkOutPlanRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkOutPlanService implements WorkOutPlanInterface  {
    
	@Autowired
	private WorkOutPlanRepository workoutPlanRepository;

    public List<WorkOutPlan> getAllWorkOutPlans() {
        return workoutPlanRepository.findAll();
    }

    public Optional<WorkOutPlan> getWorkOutPlanById(String id) {
        return workoutPlanRepository.findById(id);
    }

    public WorkOutPlan createWorkOutPlan(WorkOutPlan workoutPlan) {
        return workoutPlanRepository.save(workoutPlan);
    }

    public WorkOutPlan updateWorkOutPlan(String id, WorkOutPlan workoutPlan) {
        Optional<WorkOutPlan> existingWorkoutPlan = workoutPlanRepository.findById(id);
        if (existingWorkoutPlan.isPresent()) {
            WorkOutPlan updatedWorkOutPlan = existingWorkoutPlan.get();
            updatedWorkOutPlan.setName(workoutPlan.getName());
            updatedWorkOutPlan.setNotes(workoutPlan.getNotes());
            updatedWorkOutPlan.setRoutine(workoutPlan.getRoutine());
            return workoutPlanRepository.save(updatedWorkOutPlan);
        }
        return null;
    }

    public boolean deleteWorkOutPlan(String id) {
        if (workoutPlanRepository.existsById(id)) {
        	workoutPlanRepository.deleteById(id);
            return true;
        }
        return false;
    }
    
}

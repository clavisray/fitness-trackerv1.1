package com.fitness.backend.service;

import java.util.List;

import com.fitness.backend.repository.WorkoutRepository;
import com.fitness.backend.model.Workout;
import org.springframework.stereotype.Service;

@Service
public class WorkoutService {

    private final WorkoutRepository workoutRepository;

    public WorkoutService(WorkoutRepository workoutRepository) {
        this.workoutRepository = workoutRepository;
    }

    public Workout saveWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }
}
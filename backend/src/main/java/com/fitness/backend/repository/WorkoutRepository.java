package com.fitness.backend.repository;

import com.fitness.backend.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> findByUserId(UUID userId);
}
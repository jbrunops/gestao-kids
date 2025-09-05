package com.gestaokids.repository;

import com.gestaokids.model.Task;
import com.gestaokids.model.Child;
import com.gestaokids.model.TaskStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    
    List<Task> findByChild(Child child);
    
    List<Task> findByChildId(Long childId);
    
    List<Task> findByChildAndStatus(Child child, TaskStatus status);
    
    List<Task> findByChildIdAndStatus(Long childId, TaskStatus status);
}

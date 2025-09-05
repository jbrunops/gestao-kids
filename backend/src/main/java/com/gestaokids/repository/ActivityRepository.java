package com.gestaokids.repository;

import com.gestaokids.model.Activity;
import com.gestaokids.model.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.time.LocalDate;
import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Long> {
    
    List<Activity> findByChild(Child child);
    
    List<Activity> findByChildId(Long childId);
    
    List<Activity> findByChildAndDate(Child child, LocalDate date);
    
    List<Activity> findByChildIdAndDate(Long childId, LocalDate date);
}

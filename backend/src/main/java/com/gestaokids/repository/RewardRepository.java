package com.gestaokids.repository;

import com.gestaokids.model.Reward;
import com.gestaokids.model.Child;
import com.gestaokids.model.RewardStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RewardRepository extends JpaRepository<Reward, Long> {
    
    List<Reward> findByChild(Child child);
    
    List<Reward> findByChildId(Long childId);
    
    List<Reward> findByChildAndStatus(Child child, RewardStatus status);
    
    List<Reward> findByChildIdAndStatus(Long childId, RewardStatus status);
    
    List<Reward> findByStatus(RewardStatus status);
}

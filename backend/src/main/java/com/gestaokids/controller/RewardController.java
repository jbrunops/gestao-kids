package com.gestaokids.controller;

import com.gestaokids.dto.RewardDTO;
import com.gestaokids.model.RewardStatus;
import com.gestaokids.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/rewards")
@CrossOrigin(origins = "*")
public class RewardController {
    
    @Autowired
    private RewardService rewardService;
    
    @GetMapping("/child/{childId}")
    public ResponseEntity<List<RewardDTO>> getRewardsByChildId(@PathVariable Long childId) {
        try {
            List<RewardDTO> rewards = rewardService.getRewardsByChildId(childId);
            return ResponseEntity.ok(rewards);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/child/{childId}/status/{status}")
    public ResponseEntity<List<RewardDTO>> getRewardsByChildIdAndStatus(
            @PathVariable Long childId, 
            @PathVariable RewardStatus status) {
        try {
            List<RewardDTO> rewards = rewardService.getRewardsByChildIdAndStatus(childId, status);
            return ResponseEntity.ok(rewards);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/available")
    public ResponseEntity<List<RewardDTO>> getAvailableRewards() {
        try {
            List<RewardDTO> rewards = rewardService.getAvailableRewards();
            return ResponseEntity.ok(rewards);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<RewardDTO> getRewardById(@PathVariable Long id) {
        try {
            RewardDTO reward = rewardService.getRewardById(id);
            return ResponseEntity.ok(reward);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<RewardDTO> createReward(@Valid @RequestBody RewardDTO rewardDTO) {
        try {
            RewardDTO createdReward = rewardService.createReward(rewardDTO);
            return ResponseEntity.ok(createdReward);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<RewardDTO> updateReward(@PathVariable Long id, @Valid @RequestBody RewardDTO rewardDTO) {
        try {
            RewardDTO updatedReward = rewardService.updateReward(id, rewardDTO);
            return ResponseEntity.ok(updatedReward);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/{id}/earn/{childId}")
    public ResponseEntity<RewardDTO> earnReward(@PathVariable Long id, @PathVariable Long childId) {
        try {
            RewardDTO earnedReward = rewardService.earnReward(id, childId);
            return ResponseEntity.ok(earnedReward);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/{id}/redeem")
    public ResponseEntity<RewardDTO> redeemReward(@PathVariable Long id) {
        try {
            RewardDTO redeemedReward = rewardService.redeemReward(id);
            return ResponseEntity.ok(redeemedReward);
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReward(@PathVariable Long id) {
        try {
            rewardService.deleteReward(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}

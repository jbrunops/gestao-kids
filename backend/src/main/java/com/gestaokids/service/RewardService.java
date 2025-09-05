package com.gestaokids.service;

import com.gestaokids.dto.RewardDTO;
import com.gestaokids.model.Reward;
import com.gestaokids.model.Child;
import com.gestaokids.model.RewardStatus;
import com.gestaokids.repository.RewardRepository;
import com.gestaokids.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RewardService {
    
    @Autowired
    private RewardRepository rewardRepository;
    
    @Autowired
    private ChildRepository childRepository;
    
    public List<RewardDTO> getRewardsByChildId(Long childId) {
        List<Reward> rewards = rewardRepository.findByChildId(childId);
        return rewards.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<RewardDTO> getRewardsByChildIdAndStatus(Long childId, RewardStatus status) {
        List<Reward> rewards = rewardRepository.findByChildIdAndStatus(childId, status);
        return rewards.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<RewardDTO> getAvailableRewards() {
        List<Reward> rewards = rewardRepository.findByStatus(RewardStatus.AVAILABLE);
        return rewards.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public RewardDTO getRewardById(Long id) {
        Reward reward = rewardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reward not found with id: " + id));
        return convertToDTO(reward);
    }
    
    public RewardDTO createReward(RewardDTO rewardDTO) {
        Child child = childRepository.findById(rewardDTO.getChildId())
                .orElseThrow(() -> new RuntimeException("Child not found with id: " + rewardDTO.getChildId()));
        
        Reward reward = new Reward();
        reward.setTitle(rewardDTO.getTitle());
        reward.setDescription(rewardDTO.getDescription());
        reward.setIcon(rewardDTO.getIcon());
        reward.setCategory(rewardDTO.getCategory());
        reward.setStatus(rewardDTO.getStatus());
        reward.setPointsRequired(rewardDTO.getPointsRequired());
        reward.setMaxUses(rewardDTO.getMaxUses());
        reward.setCurrentUses(rewardDTO.getCurrentUses());
        reward.setChild(child);
        
        reward = rewardRepository.save(reward);
        return convertToDTO(reward);
    }
    
    public RewardDTO updateReward(Long id, RewardDTO rewardDTO) {
        Reward reward = rewardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reward not found with id: " + id));
        
        reward.setTitle(rewardDTO.getTitle());
        reward.setDescription(rewardDTO.getDescription());
        reward.setIcon(rewardDTO.getIcon());
        reward.setCategory(rewardDTO.getCategory());
        reward.setStatus(rewardDTO.getStatus());
        reward.setPointsRequired(rewardDTO.getPointsRequired());
        reward.setMaxUses(rewardDTO.getMaxUses());
        reward.setCurrentUses(rewardDTO.getCurrentUses());
        
        reward = rewardRepository.save(reward);
        return convertToDTO(reward);
    }
    
    public RewardDTO earnReward(Long id, Long childId) {
        Reward reward = rewardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reward not found with id: " + id));
        
        if (reward.getStatus() != RewardStatus.AVAILABLE) {
            throw new RuntimeException("Reward is not available");
        }
        
        if (reward.getCurrentUses() >= reward.getMaxUses()) {
            throw new RuntimeException("Reward has reached maximum uses");
        }
        
        reward.setStatus(RewardStatus.EARNED);
        reward.setEarnedAt(LocalDateTime.now());
        reward.setCurrentUses(reward.getCurrentUses() + 1);
        
        reward = rewardRepository.save(reward);
        return convertToDTO(reward);
    }
    
    public RewardDTO redeemReward(Long id) {
        Reward reward = rewardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reward not found with id: " + id));
        
        if (reward.getStatus() != RewardStatus.EARNED) {
            throw new RuntimeException("Reward must be earned before redemption");
        }
        
        reward.setStatus(RewardStatus.REDEEMED);
        reward.setRedeemedAt(LocalDateTime.now());
        
        reward = rewardRepository.save(reward);
        return convertToDTO(reward);
    }
    
    public void deleteReward(Long id) {
        if (!rewardRepository.existsById(id)) {
            throw new RuntimeException("Reward not found with id: " + id);
        }
        rewardRepository.deleteById(id);
    }
    
    private RewardDTO convertToDTO(Reward reward) {
        RewardDTO dto = new RewardDTO();
        dto.setId(reward.getId());
        dto.setTitle(reward.getTitle());
        dto.setDescription(reward.getDescription());
        dto.setIcon(reward.getIcon());
        dto.setCategory(reward.getCategory());
        dto.setStatus(reward.getStatus());
        dto.setPointsRequired(reward.getPointsRequired());
        dto.setMaxUses(reward.getMaxUses());
        dto.setCurrentUses(reward.getCurrentUses());
        dto.setEarnedAt(reward.getEarnedAt());
        dto.setRedeemedAt(reward.getRedeemedAt());
        dto.setChildId(reward.getChild() != null ? reward.getChild().getId() : null);
        return dto;
    }
}

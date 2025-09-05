package com.gestaokids.service;

import com.gestaokids.dto.ActivityDTO;
import com.gestaokids.model.Activity;
import com.gestaokids.model.Child;
import com.gestaokids.repository.ActivityRepository;
import com.gestaokids.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityService {
    
    @Autowired
    private ActivityRepository activityRepository;
    
    @Autowired
    private ChildRepository childRepository;
    
    public List<ActivityDTO> getActivitiesByChildId(Long childId) {
        List<Activity> activities = activityRepository.findByChildId(childId);
        return activities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<ActivityDTO> getActivitiesByChildIdAndDate(Long childId, LocalDate date) {
        List<Activity> activities = activityRepository.findByChildIdAndDate(childId, date);
        return activities.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public ActivityDTO getActivityById(Long id) {
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activity not found with id: " + id));
        return convertToDTO(activity);
    }
    
    public ActivityDTO createActivity(ActivityDTO activityDTO) {
        Child child = childRepository.findById(activityDTO.getChildId())
                .orElseThrow(() -> new RuntimeException("Child not found with id: " + activityDTO.getChildId()));
        
        Activity activity = new Activity();
        activity.setName(activityDTO.getName());
        activity.setType(activityDTO.getType());
        activity.setDuration(activityDTO.getDuration());
        activity.setStartTime(activityDTO.getStartTime());
        activity.setEndTime(activityDTO.getEndTime());
        activity.setDate(activityDTO.getDate());
        activity.setChild(child);
        
        activity = activityRepository.save(activity);
        return convertToDTO(activity);
    }
    
    public ActivityDTO updateActivity(Long id, ActivityDTO activityDTO) {
        Activity activity = activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activity not found with id: " + id));
        
        activity.setName(activityDTO.getName());
        activity.setType(activityDTO.getType());
        activity.setDuration(activityDTO.getDuration());
        activity.setStartTime(activityDTO.getStartTime());
        activity.setEndTime(activityDTO.getEndTime());
        activity.setDate(activityDTO.getDate());
        
        activity = activityRepository.save(activity);
        return convertToDTO(activity);
    }
    
    public void deleteActivity(Long id) {
        if (!activityRepository.existsById(id)) {
            throw new RuntimeException("Activity not found with id: " + id);
        }
        activityRepository.deleteById(id);
    }
    
    private ActivityDTO convertToDTO(Activity activity) {
        ActivityDTO dto = new ActivityDTO();
        dto.setId(activity.getId());
        dto.setName(activity.getName());
        dto.setType(activity.getType());
        dto.setDuration(activity.getDuration());
        dto.setStartTime(activity.getStartTime());
        dto.setEndTime(activity.getEndTime());
        dto.setDate(activity.getDate());
        dto.setChildId(activity.getChild().getId());
        return dto;
    }
}

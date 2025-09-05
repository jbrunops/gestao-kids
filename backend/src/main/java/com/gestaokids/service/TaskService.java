package com.gestaokids.service;

import com.gestaokids.dto.TaskDTO;
import com.gestaokids.model.Task;
import com.gestaokids.model.Child;
import com.gestaokids.model.TaskStatus;
import com.gestaokids.repository.TaskRepository;
import com.gestaokids.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {
    
    @Autowired
    private TaskRepository taskRepository;
    
    @Autowired
    private ChildRepository childRepository;
    
    public List<TaskDTO> getTasksByChildId(Long childId) {
        List<Task> tasks = taskRepository.findByChildId(childId);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public List<TaskDTO> getTasksByChildIdAndStatus(Long childId, TaskStatus status) {
        List<Task> tasks = taskRepository.findByChildIdAndStatus(childId, status);
        return tasks.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    public TaskDTO getTaskById(Long id) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
        return convertToDTO(task);
    }
    
    public TaskDTO createTask(TaskDTO taskDTO) {
        Child child = childRepository.findById(taskDTO.getChildId())
                .orElseThrow(() -> new RuntimeException("Child not found with id: " + taskDTO.getChildId()));
        
        Task task = new Task();
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setPriority(taskDTO.getPriority());
        task.setStatus(taskDTO.getStatus());
        task.setChild(child);
        
        task = taskRepository.save(task);
        return convertToDTO(task);
    }
    
    public TaskDTO updateTask(Long id, TaskDTO taskDTO) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
        
        task.setTitle(taskDTO.getTitle());
        task.setDescription(taskDTO.getDescription());
        task.setPriority(taskDTO.getPriority());
        task.setStatus(taskDTO.getStatus());
        
        task = taskRepository.save(task);
        return convertToDTO(task);
    }
    
    public TaskDTO updateTaskStatus(Long id, TaskStatus status) {
        Task task = taskRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
        
        task.setStatus(status);
        task = taskRepository.save(task);
        return convertToDTO(task);
    }
    
    public void deleteTask(Long id) {
        if (!taskRepository.existsById(id)) {
            throw new RuntimeException("Task not found with id: " + id);
        }
        taskRepository.deleteById(id);
    }
    
    private TaskDTO convertToDTO(Task task) {
        TaskDTO dto = new TaskDTO();
        dto.setId(task.getId());
        dto.setTitle(task.getTitle());
        dto.setDescription(task.getDescription());
        dto.setPriority(task.getPriority());
        dto.setStatus(task.getStatus());
        dto.setChildId(task.getChild().getId());
        return dto;
    }
}

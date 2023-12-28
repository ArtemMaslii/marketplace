package com.artem.marketplace.model.info;

import com.artem.marketplace.model.users.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Feedback")
@AllArgsConstructor
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "feedback_id")
    private Long feedbackId;

    @Enumerated(EnumType.STRING)
    @Column(name = "rate", nullable = false)
    private Rate rate;

    @Column(name = "feedback_message", columnDefinition = "TEXT", nullable = false)
    private String message;

    @Column(name = "img")
    private String img;

    @ManyToOne
    @JoinTable(
            name = "User_feedbacks",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "feedback_id")
    )
    private User user;
}

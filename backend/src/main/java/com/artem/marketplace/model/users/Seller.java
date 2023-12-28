package com.artem.marketplace.model.users;

import com.artem.marketplace.model.container.Showcase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Sellers")
@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Seller extends User {

    @Column(name = "phone_number", nullable = false)
    private String phoneNumber;

    @Column(name = "company_name")
    private String companyName;

    @OneToOne(mappedBy = "seller")
    private Showcase showcase;
}

package com.artem.marketplace.model.users;

import com.artem.marketplace.model.container.Cart;
import com.artem.marketplace.model.info.Address;
import com.artem.marketplace.model.info.Genre;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Buyers")
@NoArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
public class Buyer extends User {

    @Column(name = "age")
    private Integer age;

    @Column(name = "height")
    private Integer height;

    @Column(name = "weight")
    private Integer weight;

    @Column(name = "genre", length = 10)
    @Enumerated(EnumType.STRING)
    private Genre genre;

    @OneToOne(mappedBy = "buyer")
    private Cart cart;

    @OneToOne
    @JoinTable(
            name = "buyer_address",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "address_id")
    )
    private Address address;
}

package com.artem.marketplace.model.container;


import com.artem.marketplace.model.Product;
import com.artem.marketplace.model.users.Buyer;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Carts")
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long cardId;

    @OneToOne
    @JoinColumn(name = "buyer_id", unique = true, nullable = false)
    private Buyer buyer;

    @OneToMany(mappedBy = "cart")
    private List<Product> products;
}

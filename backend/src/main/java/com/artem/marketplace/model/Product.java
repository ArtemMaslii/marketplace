package com.artem.marketplace.model;

import com.artem.marketplace.model.container.Cart;
import com.artem.marketplace.model.container.Showcase;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Products")
@NoArgsConstructor
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "title", length = 100, nullable = false)
    private String title;

    @Column(name = "img")
    private String img;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "price", nullable = false)
    private Double price;

    @ManyToOne
    @JoinTable(
            name = "Cart_products",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "cart_id")
    )
    private Cart cart;

    @ManyToOne
    @JoinTable(
            name = "Showcase_products",
            joinColumns = @JoinColumn(name = "showcase_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Showcase showcase;
}

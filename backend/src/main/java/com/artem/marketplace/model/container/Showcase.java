package com.artem.marketplace.model.container;

import com.artem.marketplace.model.Product;
import com.artem.marketplace.model.users.Seller;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Showcases")
@NoArgsConstructor
@Data
@EqualsAndHashCode
public class Showcase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "showcase_id")
    private Long showcaseId;

    @OneToOne
    @JoinColumn(name = "seller_id", unique = true, nullable = false)
    private Seller seller;

    @OneToMany(mappedBy = "showcase")
    private List<Product> products;
}

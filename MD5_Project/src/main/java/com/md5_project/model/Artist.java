package com.md5_project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "artists")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class  Artist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Lob
    private String image;
    @Column(columnDefinition = "BIT DEFAULT true")
    private boolean status;
    @OneToMany(mappedBy ="artist")
    @JsonIgnoreProperties({"artist"})
    private Set<Audio> audios;

}



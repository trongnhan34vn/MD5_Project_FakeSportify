package com.md5_project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "albums")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "BIT DEFAULT true")
    private boolean status;
    @OneToMany(mappedBy = "album", targetEntity = Audio.class)
    @JsonIgnoreProperties({"album"})
    private Set<Audio> audios;
}

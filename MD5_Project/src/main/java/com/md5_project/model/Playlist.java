package com.md5_project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "playlists")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Playlist {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Lob
    private String image;
    @OneToMany(mappedBy = "playlist", targetEntity = Audio.class)
    @JsonIgnoreProperties({"playlist"})
    private Set<Audio> audios;

    @Column(columnDefinition = "BIT DEFAULT FALSE")
    private boolean status;
}

package com.md5_project.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.List;
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

    @Column(columnDefinition = "BIT DEFAULT FALSE")
    private boolean status;

    @ManyToOne
    @JsonIgnoreProperties("playlists")
    private User user;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "playlist_audio",
            joinColumns = @JoinColumn(name = "playlist_id"),
            inverseJoinColumns = @JoinColumn(name = "audio_id"))
    private Set<Audio> audios;
}

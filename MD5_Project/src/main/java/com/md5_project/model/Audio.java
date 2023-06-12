package com.md5_project.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "audios")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Audio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "audio_artist")
    @JsonIgnoreProperties({"audios"})
    private Artist artist;

    @Lob

    private String path;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "audio_album")
    @JsonIgnoreProperties({"audios"})
    private Album album;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "audio_playlist")
    @JsonIgnoreProperties({"audios"})
    private Playlist playlist;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "category_audio",
            joinColumns = @JoinColumn(name = "audio_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    @JsonIgnoreProperties({"audios"})
    private Set<Category> category;
    private int playCount;

    @Column(columnDefinition = "BIT DEFAULT true")
    private boolean status;
}

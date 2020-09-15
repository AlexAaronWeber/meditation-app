import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  baseUrlMusic: string = 'https://www.googleapis.com/youtube/v3/search';
  key: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';
  placeholderMusic: any = {
    kind: 'youtube#searchListResponse',
    etag: 'gW-ETCORh5amzzHNYRpzCswJg4g',
    nextPageToken: 'CA8QAA',
    regionCode: 'US',
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 15,
    },
    items: [
      {
        kind: 'youtube#searchResult',
        etag: 'upv143uSLXXCdMAo6AheDNFg_zg',
        id: {
          kind: 'youtube#video',
          videoId: 'EeZHNmtBvDI',
        },
        snippet: {
          publishedAt: '2015-06-18T17:33:04Z',
          channelId: 'UCwobzUc3z-0PrFpoRxNszXQ',
          title:
            '3 HOUR Relaxation Meditation: Instrumental Music, Deep Meditation, Relaxing Music, Yoga Music, ☯058A',
          description:
            'Get the new Yellow Brick Cinema iOS app for a 7-day FREE trial: https://apple.co/30uHqHe 3 HOUR Relaxation Meditation: Instrumental Music, Deep Meditation ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/EeZHNmtBvDI/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/EeZHNmtBvDI/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/EeZHNmtBvDI/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Yellow Brick Cinema - Relaxing Music',
          liveBroadcastContent: 'none',
          publishTime: '2015-06-18T17:33:04Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'Ky9TgeEcQd6cDRzU9ngypesIajs',
        id: {
          kind: 'youtube#video',
          videoId: '2OEL4P1Rz04',
        },
        snippet: {
          publishedAt: '2019-09-04T13:08:32Z',
          channelId: 'UCjzHeG1KWoonmf9d5KBvSiw',
          title:
            'Beautiful Relaxing Music for Stress Relief • Meditation Music, Sleep Music, Ambient Study Music',
          description:
            'Beautiful relaxing music for stress relief, composed by Peder B. Helland. This instrumental music ("The Hidden Valley") works well as sleep music, ambient study ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/2OEL4P1Rz04/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/2OEL4P1Rz04/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/2OEL4P1Rz04/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Soothing Relaxation',
          liveBroadcastContent: 'none',
          publishTime: '2019-09-04T13:08:32Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'WbpVXNPZC7w5O8sD4kfFwjHVFy4',
        id: {
          kind: 'youtube#video',
          videoId: 'J65GxJ2v9Wg',
        },
        snippet: {
          publishedAt: '2015-03-26T17:00:00Z',
          channelId: 'UCYy9EGb3fvmUSgMVfJ7KXJw',
          title:
            'Indian Background Flute Music: Instrumental Meditation Music | Yoga Music | Spa Music for Relaxation',
          description:
            'NuMeditationMusic youtube channel is devoted to create a new collection of LONG MEDITATION MUSIC videos for you to relax and enjoy in your daily ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/J65GxJ2v9Wg/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/J65GxJ2v9Wg/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/J65GxJ2v9Wg/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Nu Meditation Music',
          liveBroadcastContent: 'none',
          publishTime: '2015-03-26T17:00:00Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'BDx5HrdiyvY4Fwa7LjOG9D9lPAo',
        id: {
          kind: 'youtube#video',
          videoId: 'NuIAYHVeFYs',
        },
        snippet: {
          publishedAt: '2017-12-29T20:19:14Z',
          channelId: 'UCjzHeG1KWoonmf9d5KBvSiw',
          title:
            'Beautiful Instrumental Music • 24/7 | Stress Relief | Relaxing Piano, Guitar, Cello, Violin &amp; Flute',
          description:
            'Beautiful instrumental music 24/7, featuring music composed by Peder B. Helland. This live radio (relaxing piano, guitar, cello, violin, flute music and more) is ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/NuIAYHVeFYs/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/NuIAYHVeFYs/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/NuIAYHVeFYs/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Soothing Relaxation',
          liveBroadcastContent: 'live',
          publishTime: '2017-12-29T20:19:14Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'hKGtezEJsmiqju1R8KpFpacQ4Pc',
        id: {
          kind: 'youtube#video',
          videoId: '3GgSphuyBiY',
        },
        snippet: {
          publishedAt: '2020-09-14T02:06:55Z',
          channelId: 'UCwobzUc3z-0PrFpoRxNszXQ',
          title:
            '🔴 Deep Sleep Music 24/7, Insomnia, Sleep Music, Calming Music, Meditation Music, Study Music, Sleep',
          description:
            'Get the new Yellow Brick Cinema iOS app for a 7-day FREE trial: https://apple.co/30uHqHe Deep Sleep Music 24/7, Insomnia, Sleep Music, Calming Music, ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/3GgSphuyBiY/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/3GgSphuyBiY/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/3GgSphuyBiY/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Yellow Brick Cinema - Relaxing Music',
          liveBroadcastContent: 'live',
          publishTime: '2020-09-14T02:06:55Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'RV_K__w6gDcI7rS30N0KB8O2wog',
        id: {
          kind: 'youtube#video',
          videoId: 'AYcYg5WmMHI',
        },
        snippet: {
          publishedAt: '2020-09-15T01:59:01Z',
          channelId: 'UCwobzUc3z-0PrFpoRxNszXQ',
          title:
            '🔴 Sleep Music 24/7, Relaxing Music, Sleep Meditation, Insomnia, Calm Music, Study Music, Zen, Sleep',
          description:
            'Get the new Yellow Brick Cinema iOS app for a 7-day FREE trial: https://apple.co/30uHqHe Sleep Music 24/7, Relaxing Music, Sleep Meditation, Insomnia, Calm ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/AYcYg5WmMHI/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/AYcYg5WmMHI/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/AYcYg5WmMHI/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Yellow Brick Cinema - Relaxing Music',
          liveBroadcastContent: 'live',
          publishTime: '2020-09-15T01:59:01Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '502-iAL9Od-xDgI_sflU3UNTUD8',
        id: {
          kind: 'youtube#video',
          videoId: 'fOB73qRVGJs',
        },
        snippet: {
          publishedAt: '2017-05-29T11:27:06Z',
          channelId: 'UCWbmr_ERQ-gEO3FzRQsxjQw',
          title:
            'Alone With GOD - 3 Hour Peaceful Music | Relaxation Music | Christian Meditation Music |Prayer Music',
          description:
            'Subscribe To This YouTube Channel: https://www.youtube.com/user/dappytkeys?sub_confirmation=1 Stream or Download DappyTKeys Music; iTunes & Apple ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/fOB73qRVGJs/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/fOB73qRVGJs/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/fOB73qRVGJs/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'DappyTKeys Piano Worship',
          liveBroadcastContent: 'none',
          publishTime: '2017-05-29T11:27:06Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'qOdIXfTQn2E2UHm9liy7pncTzmU',
        id: {
          kind: 'youtube#video',
          videoId: 'JFSgyIsszGk',
        },
        snippet: {
          publishedAt: '2020-09-08T11:58:25Z',
          channelId: 'UCwobzUc3z-0PrFpoRxNszXQ',
          title:
            '🔴 Relaxing Music 24/7, Healing Music, Spa Music, Meditation Music, Zen, Sleep, Study Music, Yoga',
          description:
            'Get the new Yellow Brick Cinema iOS app for a 7-day FREE trial: https://apple.co/30uHqHe Relaxing Music 24/7, Healing Music, Spa Music, Meditation Music, ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/JFSgyIsszGk/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/JFSgyIsszGk/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/JFSgyIsszGk/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Yellow Brick Cinema - Relaxing Music',
          liveBroadcastContent: 'live',
          publishTime: '2020-09-08T11:58:25Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'bxd5crnxzYcJJyH1TklqvhBaxaI',
        id: {
          kind: 'youtube#video',
          videoId: 'dCvEgqePl84',
        },
        snippet: {
          publishedAt: '2016-05-16T08:00:01Z',
          channelId: 'UCjzHeG1KWoonmf9d5KBvSiw',
          title:
            'Relaxing Harp Music: Sleep Music, Meditation Music, Spa Music, Instrumental Background Music ★49',
          description:
            'Relaxing harp music (6 hours) usable as sleep music, meditation music, spa music and instrumental background music (called "The Sea"). Download this music ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/dCvEgqePl84/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/dCvEgqePl84/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/dCvEgqePl84/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Soothing Relaxation',
          liveBroadcastContent: 'none',
          publishTime: '2016-05-16T08:00:01Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'W0YG5FZkHm08s6zJHWyYz9s6cIY',
        id: {
          kind: 'youtube#video',
          videoId: 'JLJqUipWRWk',
        },
        snippet: {
          publishedAt: '2018-10-23T05:33:34Z',
          channelId: 'UCM7XCXnxtYJkkMN0zf0tsSw',
          title:
            '&quot;Instant Relief From Anxiety &amp; Stress&quot; Peaceful Meditation Music, Deep Relaxing &amp; Healing Music',
          description:
            '"Instant Relief From Anxiety & Stress" Peaceful Meditation Music, Deep Relaxing & Healing Music by Meditation and Healing. This is 1 hour peaceful piano ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/JLJqUipWRWk/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/JLJqUipWRWk/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/JLJqUipWRWk/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Meditation and Healing',
          liveBroadcastContent: 'none',
          publishTime: '2018-10-23T05:33:34Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'dIiVm5DK7dNB_FO_kChxtNtjEC4',
        id: {
          kind: 'youtube#video',
          videoId: 'CcsUYu0PVxY',
        },
        snippet: {
          publishedAt: '2014-02-05T10:05:04Z',
          channelId: 'UCdQnjeuggsBIqkqnhIwdxSA',
          title:
            '4 hours Peaceful &amp; Relaxing Instrumental Music-Long Playlist',
          description:
            'If you want more relaxing music try the Relax Melodies app: https://relaxmelodies.com You can listen to it offline too! 4 hours of soothing background music for ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/CcsUYu0PVxY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/CcsUYu0PVxY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/CcsUYu0PVxY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Relax Melodies',
          liveBroadcastContent: 'none',
          publishTime: '2014-02-05T10:05:04Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'BJuxu-tKROtszAvaNj0FzdEu3Yw',
        id: {
          kind: 'youtube#video',
          videoId: 'wrYCOTIfkP0',
        },
        snippet: {
          publishedAt: '2020-09-15T05:15:38Z',
          channelId: 'UCWbmr_ERQ-gEO3FzRQsxjQw',
          title:
            'Live Peaceful &amp; Relaxing Piano Music for Prayer, Meditation &amp; Relaxation',
          description:
            'Please subscribe to this channel and help us reach 1 Million subscribers. Thank you https://www.youtube.com/user/dappytkeys?sub_confirmation=1 Stream or ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/wrYCOTIfkP0/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/wrYCOTIfkP0/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/wrYCOTIfkP0/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'DappyTKeys Piano Worship',
          liveBroadcastContent: 'live',
          publishTime: '2020-09-15T05:15:38Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '1qIrXdxEDiX5Lwwww0CHcT_sUX4',
        id: {
          kind: 'youtube#video',
          videoId: 'K0fPdnAruF8',
        },
        snippet: {
          publishedAt: '2020-05-04T01:40:15Z',
          channelId: 'UCWbmr_ERQ-gEO3FzRQsxjQw',
          title:
            'HOLY SPIRIT: 3 Hour Prayer Time Music | Christian Meditation Music | Peaceful Relaxation Music',
          description:
            '3 Hour Piano Instrumental Worship Music for Prayer, Meditation, Deep Healing, Study, Rest, Reflection & Relaxation. Subscribe To This YouTube Channel: ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/K0fPdnAruF8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/K0fPdnAruF8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/K0fPdnAruF8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'DappyTKeys Piano Worship',
          liveBroadcastContent: 'none',
          publishTime: '2020-05-04T01:40:15Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'ApBdCLUSioONVha6ZDz0q_dmhyk',
        id: {
          kind: 'youtube#video',
          videoId: 'C9v3sZypcn4',
        },
        snippet: {
          publishedAt: '2019-10-20T19:40:12Z',
          channelId: 'UCQFC6xLJy3NzxGXRkaPrlYQ',
          title:
            'Native American Flute Music and Rain - Relaxing Music, Meditation Music, Deep Sleep Music',
          description:
            'Relaxing Sleep Music 24/7 Live Stream Music - Meditation Music, Deep Sleep Music, Study, Yoga, Spa, Insomnia, Sleep Therapy. Native American flute music ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/C9v3sZypcn4/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/C9v3sZypcn4/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/C9v3sZypcn4/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: '24Relax',
          liveBroadcastContent: 'live',
          publishTime: '2019-10-20T19:40:12Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'oAuO17CzyV555F7p_Hy9ml7IWfc',
        id: {
          kind: 'youtube#video',
          videoId: 'UUnQSc_2Ew0',
        },
        snippet: {
          publishedAt: '2016-04-29T00:34:25Z',
          channelId: 'UCjzHeG1KWoonmf9d5KBvSiw',
          title:
            'Relaxing Sleep Music: Deep Sleeping Music, Fall Asleep, Instrumental Meditation Music ★44',
          description:
            "Relaxing sleep music featuring soft harp, piano, violin and ambient waves. Lay down, relax and fall asleep while you're listening to deep sleeping music ...",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/UUnQSc_2Ew0/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/UUnQSc_2Ew0/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/UUnQSc_2Ew0/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Soothing Relaxation',
          liveBroadcastContent: 'none',
          publishTime: '2016-04-29T00:34:25Z',
        },
      },
    ],
  };
  constructor(private http: HttpClient) {}

  getPlaceHolderMusic = () => {
    return this.placeholderMusic;
  };
}

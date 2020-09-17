import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class MeditationService {
  baseUrlMeditations: string = 'https://www.googleapis.com/youtube/v3/search';
  videoBaseUrl: string = 'https://www.googleapis.com/youtube/v3/videos/list';
  brandonKey: string = 'AIzaSyBAU64ophkz8C4KY1z15G-YjFav_DqnRp8';
  troyKey: string = 'AIzaSyCariktb8hHfDYmmGcFoBsGec3mx9YsThM';
  alexKey: string = 'AIzaSyBJxMoabGco8PZBpHBt1UyMrTMJ3nK-vOk';
  auxKey: string = 'AIzaSyCrvNcuOodQMqHWCrQ5AGCXZGerp2yGiLg';
  keyword: string;

  modVideos: any = {
    kind: 'youtube#searchListResponse',
    etag: 'v8qjrVbBBPyXH8U5ey0eR9zUjzY',
    nextPageToken: 'CA8QAA',
    regionCode: 'US',
    pageInfo: {
      totalResults: 1000000,
      resultsPerPage: 15,
    },
    items: [
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
        etag: 'iGtD0Eje_LTmcc6Qju5H5gOTu1Y',
        id: {
          kind: 'youtube#video',
          videoId: 'O-6f5wQXSu8',
        },
        snippet: {
          publishedAt: '2020-04-01T15:00:15Z',
          channelId: 'UCEMArgthHuEtX-04qL_8puQ',
          title: '10-Minute Meditation For Anxiety',
          description:
            'Take a moment and let this guided meditation relieve your anxiety. Written and Narrated by John Davisi. John is a mindfulness life coach, teacher, and speaker.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/O-6f5wQXSu8/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/O-6f5wQXSu8/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/O-6f5wQXSu8/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Goodful',
          liveBroadcastContent: 'none',
          publishTime: '2020-04-01T15:00:15Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'i8wyP22vQuXG8PwbggKZVZx6p-A',
        id: {
          kind: 'youtube#video',
          videoId: 'inpok4MKVLM',
        },
        snippet: {
          publishedAt: '2019-09-04T15:00:07Z',
          channelId: 'UCEMArgthHuEtX-04qL_8puQ',
          title: '5-Minute Meditation You Can Do Anywhere',
          description:
            'In just 5 minutes you can reset your day in a positive way. Special thanks to John Davisi for lending us his incredibly soothing voice. https://www.johndavisi.com/',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/inpok4MKVLM/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/inpok4MKVLM/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/inpok4MKVLM/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Goodful',
          liveBroadcastContent: 'none',
          publishTime: '2019-09-04T15:00:07Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'fa9L5ZlsqJuwuKnJCsxiXvSKHG0',
        id: {
          kind: 'youtube#video',
          videoId: '86m4RC_ADEY',
        },
        snippet: {
          publishedAt: '2020-08-12T13:00:02Z',
          channelId: 'UC-ga3onzHSJFAGsIebtVeBg',
          title: 'Guided Meditation for Positive Energy, Relaxation, Peace 🌤',
          description:
            'Download the audio for this guided meditation → http://lavendaire.com/meditation-audio Enjoy this 20 minute guided meditation for positive energy, relaxation ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/86m4RC_ADEY/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/86m4RC_ADEY/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/86m4RC_ADEY/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Lavendaire',
          liveBroadcastContent: 'none',
          publishTime: '2020-08-12T13:00:02Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'N2kfJi7_nkFJnV7BlrLkPq3R1vQ',
        id: {
          kind: 'youtube#video',
          videoId: '1ZYbU82GVz4',
        },
        snippet: {
          publishedAt: '2016-07-03T17:09:48Z',
          channelId: 'UCjzHeG1KWoonmf9d5KBvSiw',
          title:
            'Relaxing Sleep Music: Deep Sleeping Music, Relaxing Music, Stress Relief, Meditation Music ★68',
          description:
            'Relaxing sleep music for deep sleeping and stress relief. Fall asleep to beautiful nature videos and use the relaxing music ("Flying" by Peder B. Helland) as ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/1ZYbU82GVz4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/1ZYbU82GVz4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/1ZYbU82GVz4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Soothing Relaxation',
          liveBroadcastContent: 'none',
          publishTime: '2016-07-03T17:09:48Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'OomQ6k6XBRJVKaXxoJWJ7FFQELk',
        id: {
          kind: 'youtube#video',
          videoId: 'W19PdslW7iw',
        },
        snippet: {
          publishedAt: '2020-03-21T20:42:50Z',
          channelId: 'UCWN2FPlvg9r-LnUyepH9IaQ',
          title: '15 Minute Guided Meditation To Find Peace In Uncertain Times',
          description:
            'This short guided 15 minute meditation for anxiety and stress is the perfect way to welcome peace, balance, and joy into your life especially during uncertain ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/W19PdslW7iw/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/W19PdslW7iw/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/W19PdslW7iw/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Boho Beautiful',
          liveBroadcastContent: 'none',
          publishTime: '2020-03-21T20:42:50Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '_HHWUAyabG7AV8NET6vENo3XZSw',
        id: {
          kind: 'youtube#video',
          videoId: 'M3GjxQrPeZo',
        },
        snippet: {
          publishedAt: '2020-09-13T17:29:46Z',
          channelId: 'UC1bjWVLp2aaJmPcNbi9OOsw',
          title:
            'Happiness Meditation Music - Binaural Beats Music for Serotonin Release, Happiness Frequency',
          description:
            'Happiness Meditation Music - Binaural Beats Music for Serotonin Release, Happiness Frequency ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/M3GjxQrPeZo/default_live.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/M3GjxQrPeZo/mqdefault_live.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/M3GjxQrPeZo/hqdefault_live.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Greenred Productions - Relaxing Music',
          liveBroadcastContent: 'live',
          publishTime: '2020-09-13T17:29:46Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '0viWyhJ-IbB8ZpQ61-Ss6iH3eos',
        id: {
          kind: 'youtube#video',
          videoId: 'ZToicYcHIOU',
        },
        snippet: {
          publishedAt: '2016-10-12T22:32:12Z',
          channelId: 'UChSpME3QaSFAWK8Hpmg-Dyw',
          title: 'Daily Calm | 10 Minute Mindfulness Meditation | Be Present',
          description:
            'Tamara Levitt guides this 10 minute Daily Calm mindfulness meditation to powerfully restore and re-connect with the present.',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/ZToicYcHIOU/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/ZToicYcHIOU/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/ZToicYcHIOU/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Calm',
          liveBroadcastContent: 'none',
          publishTime: '2016-10-12T22:32:12Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'MvYmWA0YPV38HUtbeVwDzUpgSuA',
        id: {
          kind: 'youtube#video',
          videoId: 'yg3CJ7Zb55o',
        },
        snippet: {
          publishedAt: '2017-02-14T08:27:52Z',
          channelId: 'UCjW-3doUmNsyY5aLQHLiNXg',
          title:
            'Connect to HIGHER SELF Guided Meditation | Hypnosis for Meeting your Higher Self',
          description:
            'Download our App for free: Apple iOS: https://apps.apple.com/us/app/new-horizon-kids-meditation/id1457179117#? Google Play (Android): ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/yg3CJ7Zb55o/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/yg3CJ7Zb55o/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/yg3CJ7Zb55o/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'New Horizon - Meditation & Sleep Stories',
          liveBroadcastContent: 'none',
          publishTime: '2017-02-14T08:27:52Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'T0Lc0LZhLRGIC43-7KbfhWTfAZY',
        id: {
          kind: 'youtube#channel',
          channelId: 'UC9GoqHypa-SDrGPMyeBkjKw',
        },
        snippet: {
          publishedAt: '2011-09-05T02:13:14Z',
          channelId: 'UC9GoqHypa-SDrGPMyeBkjKw',
          title: 'Michael Sealey',
          description:
            'Hypnosis | Hypnotherapy | Guided Meditation | Sleep Meditation Hi, my name is Michael and welcome to my channel, where I hope you can stop by to relax, ...',
          thumbnails: {
            default: {
              url:
                'https://yt3.ggpht.com/-uVcXKZ8YWtg/AAAAAAAAAAI/AAAAAAAAAAA/GNJz0DbQD0U/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
            medium: {
              url:
                'https://yt3.ggpht.com/-uVcXKZ8YWtg/AAAAAAAAAAI/AAAAAAAAAAA/GNJz0DbQD0U/s240-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
            high: {
              url:
                'https://yt3.ggpht.com/-uVcXKZ8YWtg/AAAAAAAAAAI/AAAAAAAAAAA/GNJz0DbQD0U/s800-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
          },
          channelTitle: 'Michael Sealey',
          liveBroadcastContent: 'none',
          publishTime: '2011-09-05T02:13:14Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'TXQFAw0jRx77OTy52PuEXZabCBU',
        id: {
          kind: 'youtube#video',
          videoId: 'jeGT1VXwfx4',
        },
        snippet: {
          publishedAt: '2018-05-21T09:30:01Z',
          channelId: 'UCN4vyryy6O4GlIXcXTIuZQQ',
          title:
            '10 Minute Chakra Balance Guided Meditation for Positive Energy',
          description:
            'A 10 Minute Chakra Balancing Guided Meditation leaving you feeling full of positive Energy. Enjoy!',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/jeGT1VXwfx4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/jeGT1VXwfx4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/jeGT1VXwfx4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Great Meditation',
          liveBroadcastContent: 'none',
          publishTime: '2018-05-21T09:30:01Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'QiAaBCV4ptB780FgALMZkhVFSH0',
        id: {
          kind: 'youtube#video',
          videoId: 'itZMM5gCboo',
        },
        snippet: {
          publishedAt: '2020-04-30T15:00:34Z',
          channelId: 'UCEMArgthHuEtX-04qL_8puQ',
          title: '15-Minute Meditation For Self Love',
          description:
            "Close your eyes and release all the negative thoughts that you have been holding on to. It's time from some self-love. Written and Narrated by John Davisi.",
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/itZMM5gCboo/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/itZMM5gCboo/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/itZMM5gCboo/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Goodful',
          liveBroadcastContent: 'none',
          publishTime: '2020-04-30T15:00:34Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'Zm3W8gssejlIy-8ptulpmaoKQ4s',
        id: {
          kind: 'youtube#video',
          videoId: 'd4S4twjeWTs',
        },
        snippet: {
          publishedAt: '2017-03-26T08:00:08Z',
          channelId: 'UCFKE7WVJfvaHW5q283SxchA',
          title: 'Meditation For Inner Peace - Yoga With Adriene',
          description:
            'Dive into meditation this Spring, go inward to focus on what feels good in mind and body. Want to have a good body? Tend to the mind. This 10 min practice is a ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/d4S4twjeWTs/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/d4S4twjeWTs/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/d4S4twjeWTs/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Yoga With Adriene',
          liveBroadcastContent: 'none',
          publishTime: '2017-03-26T08:00:08Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: '1RVicpYZpukTsbF0qVxldRQLq4w',
        id: {
          kind: 'youtube#video',
          videoId: '4pLUleLdwY4',
        },
        snippet: {
          publishedAt: '2017-05-14T08:00:01Z',
          channelId: 'UCFKE7WVJfvaHW5q283SxchA',
          title: 'Meditation for Anxiety - Yoga With Adriene',
          description:
            '15 Minute Meditation For Anxiety guides you through a simple at home meditation to provide relief from anxiety, stress, and energetic imbalance. Find a ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/4pLUleLdwY4/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/4pLUleLdwY4/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/4pLUleLdwY4/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Yoga With Adriene',
          liveBroadcastContent: 'none',
          publishTime: '2017-05-14T08:00:01Z',
        },
      },
      {
        kind: 'youtube#searchResult',
        etag: 'a9o5oDVgzyEUQPzJycfY0Hha3Rg',
        id: {
          kind: 'youtube#video',
          videoId: 'lssNBHXz4Vw',
        },
        snippet: {
          publishedAt: '2014-04-07T19:49:44Z',
          channelId: 'UC2lhkpiTGTxT-0M97iSfBrw',
          title:
            'Calm Guided Meditation to Gain Abundance, Love &amp; Happiness | Bob Proctor',
          description:
            'Get access to even more meditations with the Omvana app  https://go.mindvalley.com/MeditateNow Bob Proctor is one of the most sought-after leaders in ...',
          thumbnails: {
            default: {
              url: 'https://i.ytimg.com/vi/lssNBHXz4Vw/default.jpg',
              width: 120,
              height: 90,
            },
            medium: {
              url: 'https://i.ytimg.com/vi/lssNBHXz4Vw/mqdefault.jpg',
              width: 320,
              height: 180,
            },
            high: {
              url: 'https://i.ytimg.com/vi/lssNBHXz4Vw/hqdefault.jpg',
              width: 480,
              height: 360,
            },
          },
          channelTitle: 'Omvana by Mindvalley',
          liveBroadcastContent: 'none',
          publishTime: '2014-04-07T19:49:44Z',
        },
      },
    ],
  };
  constructor(private http: HttpClient) {}

  getMeditations = (subject: string): any => {
    return this.http.get(this.baseUrlMeditations, {
      params: {
        key: this.auxKey,
        q: subject,
        part: 'snippet',
        maxResults: '15',
      },
    });
  };

  getModVideo = () => {
    return this.modVideos;
  };
}

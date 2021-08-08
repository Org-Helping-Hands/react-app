import React, { useEffect, useState } from 'react';
import styles from './follow-post.module.css';
import { MapBox } from '../mapbox/mapbox';
import mapboxgl from 'mapbox-gl';
import { useHistory, RouteProps } from 'react-router-dom';
import {
  fetchDetailedPost,
  fetchImageDetailedPost,
  postDetailResponse,
  updateStatus
} from '../../common/api';

export function FollowPost (props: RouteProps) {
  const [marker, setMarker] = useState<mapboxgl.Marker>();
  const [description, setDescription] = useState('');
  const [postId, setPostId] = useState('');
  const [tags, setTags] = useState<string[]>();
  const [images, setImages] = useState<string[]>([]);
  const [iconTags] = useState([
    { name: 'Water', icon: 'akar-icons:water' },
    { name: 'Food', icon: 'emojione-monotone:pot-of-food' },
    { name: 'Shelter', icon: 'ic-baseline-night-shelter' },
    { name: 'medical Help', icon: 'mdi-hospital-box' },
    { name: 'Educational Help', icon: 'carbon-education' },
    { name: 'financial Help', icon: 'map:finance' },
    { name: 'cloths', icon: 'map:clothing-store' },
    { name: 'Adoption', icon: 'carbon:pedestrian-family' }
  ]);

  function getIconName (name: string) {
    const findIcon = iconTags.find((e) => e.name === name);
    return findIcon?.icon;
  }
  function createMarker (post: postDetailResponse) {
    setMarker(
      new mapboxgl.Marker().setLngLat([parseFloat(post.longitude), parseFloat(post.latitude)])
    );
  }
  const history = useHistory();
  function onTickClick () {
    updateStatus(postId, 'Completed').then((_) => history.push('/thankyou'));
  }
  function onCrossClick () {
    updateStatus(postId, 'Idle').then((_) => history.push('/home'));
  }
  useEffect(() => {
    const id = new URLSearchParams(props.location?.search).get('id');
    if (id) {
      setPostId(id);

      fetchDetailedPost(id).then(({ data }) => {
        setDescription(data.description);
        setTags(
          data.neededItems.map((e) => {
            return e.itemName;
          })
        );

        createMarker(data);
      });
      fetchImageDetailedPost(id).then(({ data }) => {
        setImages(data);
      });
    } else {
      // new Error('No id found please select post from find needy page');
    }
  }, []);

  return (
    <>
      <div>
        <img
          className={styles.arrow}
          src='/assets/find-needy/arrow.jpg'
          onClick={() => history.goBack()}
        />
        <p className={styles.top}>Needy people near you</p>
        <MapBox markers={marker ? [marker] : []}></MapBox>
        <span>
          {tags?.map((e, i) => {
            return <i key={i} className={`iconify ${styles.tag}`} data-icon={getIconName(e)}></i>;
          })}
        </span>

        <p className={styles.bottom}>{description}</p>

        <span className={'iconify-wrapper '} onClick={onCrossClick}>
          <i className={`iconify ${styles.hicons}`} data-icon='akar-icons:cross'></i>
        </span>
        <span className={'iconify-wrapper '} onClick={onTickClick}>
          <i
            className={`iconify ${styles.shicons}`}
            data-icon='akar-icons:check'
            data-inline='false'></i>
        </span>
      </div>
    </>
  );
}

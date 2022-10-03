import Head from 'next/head'
import { useGeolocated } from 'react-geolocated'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { coords } = useGeolocated()
  return (
    <>
      {coords ? (
        <h1>
          {coords.latitude},{coords.longitude}
        </h1>
      ) : (
        <h1>No location found</h1>
      )}
    </>
  )
}

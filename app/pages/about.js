import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Gravatar from 'react-gravatar'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>WebTech - contact us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-56 max-w-md md:max-w-2xl content-center ">
        <div class="flex items-start px-4 py-6">
          <div class="">
            <Gravatar class="w-12 h-12 rounded-full object-cover mr-4 shadow" email="saccoman.lu@gmail.com" />
            <div class="">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900 -mt-1">Lucas Saccoman </h2>
              </div>
            </div>
            <br />
            <Gravatar class="w-12 h-12 rounded-full object-cover mr-4 shadow" email="alexandre.correia@edu.ece.fr" />
            <div class="">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-gray-900 -mt-1">Alexandre Correia </h2>
              </div>
            </div>
          </div>
          <p class="text-gray-700">_</p>
          <p class="mt-3 text-gray-700 text-sm">
            Welcome to our portfolio! We are two engineering students studying computer science and passionate about technology and programming. Our portfolio was created as part of a school project to showcase the skills and knowledge we have gained through our studies.
            <br /><br />
            In this portfolio, you will find examples of the projects we have worked on, as well as information about our background and interests. We are committed to continuously learning and staying up-to-date on the latest developments in the field, and we hope that our portfolio reflects this dedication.
            <br /><br />
            Thank you for taking the time to visit our portfolio. We hope you find it informative and interesting, and we welcome any feedback or suggestions you may have.
          </p>
          <div class="mt-4 flex items-center">
          </div>
        </div>
      </div>
    </Layout>
  )
}
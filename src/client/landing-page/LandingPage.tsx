import React from "react"

import "./LandingPage.scss"

export default function LandingBox({
  children,
}: {
  children: React.ReactElement
}) {
  return (
    <div id='landing-page'>
      <div id='header'>
        <p>
          <h1>YOUR ONE-STOP SPOT FOR</h1>
        </p>
        <p>
          <span id='spin'></span>
        </p>
        <p>
          <h1>AND EVERY SPECIAL OCCASIONS</h1>
        </p>
      </div>
      <h1>Simplify Gifting with Personalized Wishlists</h1>Tired of the
      guesswork in gift-giving? Join a community where you can easily create
      your wishlist, share it with friends, and view theirs—all in one place.
      Whether it’s for birthdays, holidays, graduations, or any special
      occasion, give (and receive!) the gifts that matter most.
      <h2>How It Works</h2>
      Create Your Wishlist - Add your most-wanted items, big or small, for any
      occasion. Connect with Friends - Invite friends to connect and share
      wishlists. Give with Confidence - No more guessing! Know exactly what
      they’ll love. <h2>Why Join?</h2>Stress-Free Gifting: Say goodbye to
      last-minute shopping dilemmas and gift mismatches. Stay Organized: Track
      upcoming events and special days so you never miss a moment. Personalized
      Touch: Show you care by giving something they truly want.
      <i>Ready to make gift-giving easier? Create Your Wishlist Today!</i>
      <div id='landing-box'>{children}</div>
    </div>
  )
}

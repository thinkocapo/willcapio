import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import will from './will_where_is_will_photo.png'

const placesAndDates = [
  { date: 'April 1st', place: 'Vienna, Austria'},
  { date: 'May 5th-9th', place: 'Amsterdam, Netherlands'},
  { date: 'May 27th', place: 'Bratislava, Slovakia'},
  { date: 'May 28th-30th', place: 'Geneva & Bern & Zurich, Switzerland'},
  { date: 'May 30th', place: 'Innsbruck, Austria'},
  { date: 'June 10th-12th', place: 'Bratislava, Slovakia'},
  { date: 'June 13th-19th', place: 'Berlin, Germany'},
  { date: 'June 30th-July4th', place: 'Turin, Italy'},
  { date: 'July 14th-18th', place: 'Belgrade, Serbia'},
  { date: 'July 18th-21st', place: 'Nis, Serbia'},
  { date: 'July 21st-24th', place: 'Sofia, Bulgaria'},
  { date: 'July 24th-26th', place: 'Varna, Bulgaria'},
  { date: 'August 23rd-24th', place: 'Edinburgh, Scotland'},
  { date: 'August 24th-27th', place: 'Leeds, United Kingdom'},
  { date: 'August 27th-29th', place: 'Liverpool & Manchester, United Kingdom'},
  { date: 'September 9th-12th', place: 'Warsaw, Poland'},
  { date: 'September 12th-14th', place: 'Krakow, Poland'},
  { date: 'September 20th-23rd', place: 'Porto, Portugal'},
  { date: 'September 23rd-26th', place: 'Lisbon, Portugal'},
  { date: 'October 14th-17th', place: 'Barcelona, Spain'},
]
const WhereIsWill = center => (
  <Layout>
    <Helmet title={'WhereIsWill'} />
    <Header title="Where Is Will">right here</Header>
    <Container left={center}>
      <img src={will} alt="will" />
      <h2>Travel Update</h2>
      <p>I spent 3 years living in San Francisco, California from 2019 to 2022.</p>
      <p>I moved to Vienna, Austria on April 1st, 2022 for the job from SF.</p>
      <p>Here is a list of the places I've been in 2022.</p>
      <table>
        <tr>
          <th>Place</th>
          <th>Date (2022)</th> 
        </tr>

        {placesAndDates.map(( obj ) => {
            return (
              <tr>
                <td>{obj.place}</td>
                <td>{obj.date}</td> 
              </tr>
            );
        })}


      </table>

      <p>Berlin and Porto were for work conferences</p>

      {/* <h2 style={{ 'color': 'blue' }}>Books</h2> */}
      <br></br>
    </Container>
  </Layout>
);

export default WhereIsWill;

WhereIsWill.propTypes = {
  center: PropTypes.object,
};

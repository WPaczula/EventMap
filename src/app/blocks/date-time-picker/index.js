import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import Helmet from 'react-helmet'
import React from 'react'

const reactCalendarStyles = () => (
  <style>
    {`
.react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers {
    font-weight: bold;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    color: red;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #969696;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
  }
  .react-calendar__tile--active {
    background: #006edc;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1087ff;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }`}
  </style>
)


const reactClockStyles = () => (
  <style>
    {`
  .react-clock {
    display: block;
      position: relative;
    }
    .react-clock,
    .react-clock *,
    .react-clock *:before,
    .react-clock *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
    .react-clock__face {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 1px solid black;
      border-radius: 50%;
    }
    .react-clock__hand {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      right: 50%;
    }
    .react-clock__hand__body {
      position: absolute;
      background-color: black;
      transform: translateX(-50%);
    }
    .react-clock__mark {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      right: 50%;
    }
    .react-clock__mark__body {
      position: absolute;
      background-color: black;
      transform: translateX(-50%);
    }
    .react-clock__mark__number {
      position: absolute;
      left: -40px;
      width: 80px;
      text-align: center;
    }
    .react-clock__second-hand__body {
      background-color: red;
    }
  `}
  </style>
)

const reactDateTimeStyles = () => (
  <style>
    {`
  .react-datetime-picker {
    display: inline-flex;
    position: relative;
  }
  .react-datetime-picker,
  .react-datetime-picker *,
  .react-datetime-picker *:before,
  .react-datetime-picker *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-datetime-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
  }
  .react-datetime-picker__wrapper {
    display: flex;
    border: thin solid gray;
  }
  .react-datetime-picker__inputGroup {
    min-width: calc(4px + (4px * 3) +  0.54em * 6  +  0.217em * 2);
    flex-grow: 1;
    display: flex;
    padding: 0 2px;
    align-items: baseline;
  }
  .react-datetime-picker__inputGroup__divider {
    padding: 1px 0;
  }
  .react-datetime-picker__inputGroup__input {
    min-width: 0.54em;
    height: calc(100% - 2px);
    position: relative;
    padding: 1px;
    border: 0;
    background: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
  }
  .react-datetime-picker__inputGroup__input::-webkit-outer-spin-button,
  .react-datetime-picker__inputGroup__input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .react-datetime-picker__inputGroup__input:invalid {
    background: rgba(255, 0, 0, 0.1);
  }
  .react-datetime-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px +  0.54em);
  }
  .react-datetime-picker__inputGroup__amPm {
    font: inherit;
    -moz-appearance: menulist;
  }
  .react-datetime-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 6px;
  }
  .react-datetime-picker__button:enabled {
    cursor: pointer;
  }
  .react-datetime-picker__button:enabled:hover svg g,
  .react-datetime-picker__button:enabled:focus svg g {
    stroke: #0078d7;
  }
  .react-datetime-picker__button:disabled svg g {
    stroke: #6d6d6d;
  }
  .react-datetime-picker__button svg {
    display: inherit;
  }
  .react-datetime-picker__calendar,
  .react-datetime-picker__clock {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }
  .react-datetime-picker__calendar--closed,
  .react-datetime-picker__clock--closed {
    display: none;
  }
  .react-datetime-picker__calendar--above-label,
  .react-datetime-picker__clock--above-label {
    bottom: 100%;
    top: auto;
  }
  .react-datetime-picker__calendar {
    width: 350px;
    max-width: 100vw;
  }
  .react-datetime-picker__calendar .react-calendar {
    border-width: thin;
  }
  .react-datetime-picker__clock {
    width: 200px;
    height: 200px;
    max-width: 100vw;
    padding: 25px;
    background-color: white;
    border: thin solid #a0a096;
  }
  `}
  </style>
)

const DateTimePick = props => (
    <>
      <Helmet>
        {reactCalendarStyles()}
        {reactClockStyles()}
        {reactDateTimeStyles()}
      </Helmet>
      <DateTimePicker {...props} />
    </>
)

export default DateTimePick

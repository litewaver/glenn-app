// BookingPage.jsx
import { useState } from 'react';

const PACKAGE = {
  name: 'TIER 1 - REEL READY',
  price: 150,
  features: [
    '1 Edited Instagram Reel (15-30 sec)',
    'Includes footage you shoot during the event or day',
    '1 round of revisions',
    'Optimized for Instagram & TikTok',
  ],
  perfectFor: [
    'small events',
    'food drops',
    'cocktail specials',
    'DJ nights',
  ],
};

const Booking = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventTime: '',
    eventType: '',
    additionalDetails: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Email is invalid.';
    }
    if (!form.phone.trim()) errs.phone = 'Phone is required.';
    if (!form.eventDate) errs.eventDate = 'Event date is required.';
    if (!form.eventTime) errs.eventTime = 'Event time is required.';
    if (!form.eventType.trim()) errs.eventType = 'Event type is required.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    // TODO: replace with real submission logic (API call / payment integration)
    console.log('Booking submitted:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-8 bg-white rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
        <p className="mb-2">
          Your booking request for <strong>{PACKAGE.name}</strong> has been received.
        </p>
        <p className="mb-4">
          We’ll reach out to you at <strong>{form.email}</strong> or{' '}
          <strong>{form.phone}</strong> to confirm details and next steps.
        </p>
        <div className="border-t pt-4">
          <h3 className="font-semibold">Booking Summary</h3>
          <p>
            <strong>Package:</strong> {PACKAGE.name}
          </p>
          <p>
            <strong>Price:</strong> ${PACKAGE.price}
          </p>
          <p>
            <strong>Event Type:</strong> {form.eventType}
          </p>
          <p>
            <strong>Date & Time:</strong> {form.eventDate} at {form.eventTime}
          </p>
          {form.additionalDetails && (
            <p>
              <strong>Details:</strong> {form.additionalDetails}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-2xl shadow">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Package Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-3xl font-bold">{PACKAGE.name}</h1>
            <p className="text-xl text-green-600 font-semibold mt-1">${PACKAGE.price}</p>
          </div>
          <div>
            <h2 className="font-semibold">What’s Included:</h2>
            <ul className="list-disc list-inside space-y-1">
              {PACKAGE.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold">Perfect for:</h2>
            <p>{PACKAGE.perfectFor.join(', ')}</p>
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label className="block font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(123) 456-7890"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                    errors.eventDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.eventDate && (
                  <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>
                )}
              </div>
              <div>
                <label className="block font-medium">Event Time</label>
                <input
                  type="time"
                  name="eventTime"
                  value={form.eventTime}
                  onChange={handleChange}
                  className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                    errors.eventTime ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.eventTime && (
                  <p className="text-red-500 text-sm mt-1">{errors.eventTime}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block font-medium">Event Type</label>
              <input
                type="text"
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className={`w-full mt-1 p-3 border rounded-lg focus:outline-none ${
                  errors.eventType ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="e.g., DJ night, food drop, small private event"
              />
              {errors.eventType && (
                <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Additional Details (optional)</label>
              <textarea
                name="additionalDetails"
                value={form.additionalDetails}
                onChange={handleChange}
                rows={4}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Anything else you want me to know?"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 font-semibold rounded-2xl shadow hover:shadow-md transition bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
              >
                Book Now for ${PACKAGE.price}
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            After submission, you'll receive a confirmation and next steps (payment link, shoot prep,
            etc.).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;

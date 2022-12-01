import configureMeasurements from '../..';
import gravity, {
  GravitySystems,
  GravityUnits,
} from '../gravity';

test('Bx to P', () => {
  const convert = configureMeasurements<
    'gravity',
    GravitySystems,
    GravityUnits
  >({
    gravity,
  });
  expect(Math.round(convert(0.0).from('Bx').to('P') * 100) / 100.0).toBe(0.0);
  expect(Math.round(convert(10.0).from('Bx').to('P') * 100) / 100.0).toBe(10.4);
  expect(Math.round(convert(30.0).from('Bx').to('P') * 100) / 100.0).toBe(31.2);
});

test('Bx to sg', () => {
    const convert = configureMeasurements<
      'gravity',
      GravitySystems,
      GravityUnits
    >({
      gravity,
    });
    expect(Math.round(convert(0.0).from('Bx').to('sg') * 1000) / 1000.0).toBe(1.000);
    expect(Math.round(convert(10.0).from('Bx').to('sg') * 1000) / 1000.0).toBe(1.042);
    expect(Math.round(convert(30.0).from('Bx').to('sg') * 1000) / 1000.0).toBe(1.135);
});

test('P to sg', () => {
    const convert = configureMeasurements<
      'gravity',
      GravitySystems,
      GravityUnits
    >({
      gravity,
    });
    expect(Math.round(convert(0.0).from('P').to('sg') * 1000) / 1000.0).toBe(1.000);
    expect(Math.round(convert(10.4).from('P').to('sg') * 1000) / 1000.0).toBe(1.042);
    expect(Math.round(convert(31.2).from('P').to('sg') * 1000) / 1000.0).toBe(1.135);
});

test('sg to P', () => {
    const convert = configureMeasurements<
      'gravity',
      GravitySystems,
      GravityUnits
    >({
      gravity,
    });
    expect(Math.round(convert(1.000).from('sg').to('P'))).toBe(-0);
    expect((Math.round(convert(1.029).from('sg').to('P') * 10.0)) / 10.0).toBe(7.3);
    expect((Math.round(convert(1.125).from('sg').to('P') * 10.0)) / 10.0).toBe(29.1);
});

test('P to Bx', () => {
  const convert = configureMeasurements<
    'gravity',
    GravitySystems,
    GravityUnits
  >({
    gravity,
  });
  expect(Math.round(convert(0.0).from('P').to('Bx') * 100) / 100.0).toBe(0.0);
  expect(Math.round(convert(10.4).from('P').to('Bx') * 100) / 100.0).toBe(10.0);
  expect(Math.round(convert(31.2).from('P').to('Bx') * 100) / 100.0).toBe(30.0);
});

test('sg to P', () => {
  const convert = configureMeasurements<
    'gravity',
    GravitySystems,
    GravityUnits
  >({
    gravity,
  });
  expect(Math.round(convert(1.000).from('sg').to('Bx'))).toBe(-0);
  expect((Math.round(convert(1.029).from('sg').to('Bx') * 10.0)) / 10.0).toBe(7.0);
  expect((Math.round(convert(1.125).from('sg').to('Bx') * 10.0)) / 10.0).toBe(28.0);
});
const Slider = require('./Slider');
test('Changing slider', () => {
   expect(Slider(this.count > this.slides.length)).toBe(this.count++);
});

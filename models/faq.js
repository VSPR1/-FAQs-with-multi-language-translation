
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },  
  question_hi: { type: String, default: '' },
  question_bn: { type: String, default: '' }, 
});

faqSchema.methods.getTranslatedQuestion = function(lang) {
  const translations = {
    hi: this.question_hi,
    bn: this.question_bn,
  };
  return translations[lang] || this.question; 

const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;

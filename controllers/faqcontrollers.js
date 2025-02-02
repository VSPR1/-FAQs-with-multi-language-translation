const Faq = require('../models/Faq');
const redis = require('ioredis');
const redisClient = new redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

// Controller to fetch FAQs
exports.getFaqs = async (req, res) => {
  try {
    const lang = req.query.lang || 'en'; // Default to 'en' (English)

    // Check if FAQs are cached in Redis
    const cachedFaqs = await redisClient.get('faqs:' + lang);
    if (cachedFaqs) {
      return res.json(JSON.parse(cachedFaqs));
    }

    // Fetch FAQs from DB
    const faqs = await Faq.find();
    const result = faqs.map(faq => ({
      question: faq.getTranslatedQuestion(lang),
      answer: faq.answer,
    }));

    // Cache the result in Redis for 1 hour
    redisClient.set('faqs:' + lang, JSON.stringify(result), 'EX', 60 * 60);

    return res.json(result);
    
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', error: err });
  }
};

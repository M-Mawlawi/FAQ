import { useState } from 'react';
import './App.css';
import FAQItem from './components/FAQItem';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';

const faqData = [
  {
    category: 'Returns',
    question: 'What is your return policy?',
    answer: 'You can return items within 30 days of purchase with a receipt.'
  },
  {
    category: 'Support',
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 support through chat, email, and phone.'
  },
  {
    category: 'Orders',
    question: 'How can I track my order?',
    answer: 'Tracking information will be sent to your email after shipping.'
  },
  {
    category: 'Payments',
    question: 'What payment methods are accepted?',
    answer: 'We accept credit cards, PayPal, and Apple Pay.'
  },
  {
    category: 'Accounts',
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login screen and follow the instructions.'
  },
  {
    category: 'Shipping',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to most countries worldwide.'
  }
];

const categories = ['All', ...new Set(faqData.map((faq) => faq.category))];

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-gray-500 mb-8">Find answers to common questions below.</p>
      <SearchBar value={search} onChange={setSearch} />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="bg-white p-6 rounded-xl shadow-md">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))
        ) : (
          <p className="text-gray-500">No FAQs matched your search.</p>
        )}
      </div>
    </div>
  );
}

export default App;

const Lead = require('../models/Lead');

exports.createLead = async (req, res) => {
  try {
    const { name, email, phone, enquiryType } = req.body;

    const lead = await Lead.create({
      name,
      contactInfo: {
        email,
        phone,
      },
      enquiryType,
    });

    res.status(201).json({ message: 'Lead captured successfully', leadId: lead._id });
  } catch (error) {
    res.status(500).json({ error: 'Server error while capturing lead' });
  }
};

exports.getLeads = async (req, res) => {
  try {
    // Basic implementation for Admin/Counsellor
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Server error while fetching leads' });
  }
};

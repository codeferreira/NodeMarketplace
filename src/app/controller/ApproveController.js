const Purchase = require('../models/Purchase')
const Ad = require('../models/Ad')

class ApproveController {
  async update (req, res) {
    const purchase = await Purchase.findById(req.params.id)

    const ad = await Ad.findById(purchase.ad)

    if (!ad.author.equals(req.userId)) {
      return res.status(401).json({ error: "You're note the ad author" })
    }

    if (ad.purchasedBy) {
      return res.status(400).json({ error: 'This ad has already been purchased' })
    }

    ad.purchasedBy = purchase.id

    await ad.save()

    return res.json(ad)
  }
}

module.exports = new ApproveController()

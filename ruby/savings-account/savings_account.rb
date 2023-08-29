module SavingsAccount
  RATES = {
    0...1000 => 0.5,
    1_000...5000 => 1.621,
    5_000..Float::INFINITY => 2.475
  }.freeze

  def self.interest_rate(balance)
    return 3.213 if balance.negative?

    RATES.each do |range, rate|
      return rate if range.cover?(balance)
    end
  end

  def self.annual_balance_update(balance)
    balance + (balance * interest_rate(balance) / 100)
  end

  def self.years_before_desired_balance(current_balance, desired_balance)
    years = 0

    while current_balance < desired_balance
      current_balance = annual_balance_update(current_balance)
      years += 1
    end

    years
  end
end
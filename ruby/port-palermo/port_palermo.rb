module Port
  IDENTIFIER = :PALE
  PORT_A_CARGO = %w(OIL GAS).freeze

  def self.get_identifier(city)
    city.upcase[0..3].to_sym
  end

  def self.get_terminal(ship_identifier)
    return :A if ship_identifier.start_with?(*PORT_A_CARGO)

    :B
  end
end

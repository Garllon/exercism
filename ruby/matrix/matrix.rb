=begin
Write your code for the 'Matrix' exercise in this file. Make the tests in
`matrix_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/matrix` directory.
=end
class Matrix
  def initialize(matrix_string)
    @matrix_string = matrix_string
  end

  def row(number)
    rows[number - 1]
  end

  def column(number)
    columns[number - 1]
  end

  private

  def rows
    @rows ||= matrix_string.lines.map do |row|
      row.split.map(&:to_i)
    end
  end

  def columns
    @columns ||= rows.transpose
  end

  attr_reader :matrix_string
end